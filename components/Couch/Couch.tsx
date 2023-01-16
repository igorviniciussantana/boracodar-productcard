import { useCallback, useEffect, useRef, useState } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { loadGLTFModel } from "../../lib/model";
import { CouchWrapper, Container, Button, Loading } from "./styled";
import * as THREE from "three";
import Image from "next/image";
import CouchImage from "./CouchImage";

export default function Couch() {
  const refBody = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [renderer, setRenderer] = useState<any>();
  const [_camera, setCamera] = useState<any>();
  const [target] = useState(new THREE.Vector3(10, 10, -12));
  const [view, setView] = useState(false);


  const [initialCameraPosition] = useState(new THREE.Vector3(50, 200, 700));
  // const [initialCameraPosition] = useState(
  //   new THREE.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI)),
  // );
  const [scene, setScene] = useState(new THREE.Scene());
  const [_controls, setControls] = useState<any>();

 
  useEffect(() => {
    const { current: container } = refBody;
    console.log('rodou useEffect')
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
      const camera = new THREE.PerspectiveCamera(100, scW / scH, 1, 6000);

      camera.position.copy(initialCameraPosition);
      camera.rotation.set(0, 0, 75);
      camera.lookAt(target);
      console.log('setou')
      setCamera(camera);

      const ambientLight = new THREE.AmbientLight(0xcccccc, 1);
      scene.add(ambientLight);

      const controls = new OrbitControls(camera, renderer.domElement);
      // controls.autoRotate = true;
      controls.target = target;
      setControls(controls);

      loadGLTFModel(scene, "/margot_sofa/scene.gltf", {
        receiveShadow: false,
        castShadow: false,
      }).then(() => {
        animate();
        setLoading(false);
      });

      let req: any = null;
      let frame = 0;
      const animate = () => {
        req = requestAnimationFrame(animate);

        frame = frame <= 100 ? frame + 1 : frame;

        controls.update();

        renderer.render(scene, camera);
      };

      return () => {
        console.log("unmount");
        cancelAnimationFrame(req);
        renderer.dispose();
      };
    }
  }, [view, renderer]);

  function changeView(){
    setView(!view)
    setRenderer(null)
    setScene(new THREE.Scene())
    setLoading(true)
  }


  return (
    <Container>
      <Button onClick={changeView}>{view ? <Image alt='' src='/closeicon.svg' width={24} height={24}/> : <Image alt='' src='/360icon.svg' width={24} height={24}/>}</Button>
      {view ? <CouchWrapper ref={refBody}>{loading && <Loading><CouchImage /><p>Loading...</p></Loading>}</CouchWrapper> : <CouchImage />}
      
    </Container>
  );
}
