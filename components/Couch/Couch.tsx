import { useCallback, useEffect, useRef, useState } from "react"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { loadGLTFModel } from '../../lib/model';
import { BodyModel, Container, Footer, Header } from "./styled"
import * as THREE from 'three' 


export default function Couch(){

    const refBody = useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [renderer, setRenderer] = useState<any>();
    const [_camera, setCamera] = useState<any>();
    const [target] = useState(new THREE.Vector3(10, 10, -12));

    const [initialCameraPosition] = useState(
      new THREE.Vector3(   100, 20, 700  ),
    );
    // const [initialCameraPosition] = useState(
    //   new THREE.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI)),
    // );
    const [scene] = useState(new THREE.Scene());
    const [_controls, setControls] = useState<any>();
  
    const handleWindowResize = useCallback(() => {
      const { current: container } = refBody;
      if (container && renderer) {
        const scW = container.clientWidth;
        const scH = container.clientHeight;
  
        renderer.setSize(scW, scH);
      }
    }, [renderer]);
  
    const easeOutCirc = (x: number) => {
      return Math.sqrt(1 - Math.pow(x - 1, 4));
    };
  
    useEffect(() => {
      const { current: container } = refBody;
      if (container && !renderer) {
        const scW = container.clientWidth;
        const scH = container.clientHeight;
  
        const renderer = new THREE.WebGLRenderer({
          antialias: true,
          alpha: true,
        });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(scW, scH);
        renderer.outputEncoding = THREE.sRGBEncoding;
        container.appendChild(renderer.domElement);
        setRenderer(renderer);
  
        const scale = scH * 0.08 + 2;
        const camera = new THREE.PerspectiveCamera(100, scW/ scH, 1, 6000 );

        camera.position.copy(initialCameraPosition);
        camera.lookAt(target);
        setCamera(camera);
  
        const ambientLight = new THREE.AmbientLight(0xcccccc, 1);
        scene.add(ambientLight);
  
        const controls = new OrbitControls(camera, renderer.domElement);
        // controls.autoRotate = true;
        controls.target = target;
        setControls(controls);
  
        loadGLTFModel(scene, '/margot_sofa/scene.gltf', {
          receiveShadow: false,
          castShadow: false,
        }).then(() => {
            animate()
          setLoading(false);
        });
        console.log(target)
  
        let req: any = null;
        let frame = 0;
        const animate = () => {
          req = requestAnimationFrame(animate);
  
          frame = frame <= 100 ? frame + 1 : frame;
  
          if (frame <= 100) {
            const p = initialCameraPosition;
            const rotSpeed = 0;
  
            camera.position.y = 5;
            camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
            camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
            camera.lookAt(target);
          } else {
            controls.update();
          }
  
          renderer.render(scene, camera);
        };
  
        return () => {
          console.log('unmount');
          cancelAnimationFrame(req);
          renderer.dispose();
        };
      }
    }, []);
  
    useEffect(() => {
      window.addEventListener('resize', handleWindowResize, false);
      return () => {
        window.removeEventListener('resize', handleWindowResize, false);
      };
    }, [renderer, handleWindowResize]);

    return(
        <Container>
<Header>
    <h1>Couch</h1>
</Header>
<BodyModel ref={refBody}>
    {loading && <p>loading...</p>}
</BodyModel>
<Footer>
    <p>Created By Igor Vinicius</p>
</Footer>
        </Container>
    )
}