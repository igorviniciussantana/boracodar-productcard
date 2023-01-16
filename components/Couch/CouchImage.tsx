import Image from "next/image";
import { CouchImageWrapper } from "./styled";

export default function CouchImage() {
  return (
    <CouchImageWrapper>
      <img src="/couch.png" alt="vintage couch image" />
    </CouchImageWrapper>
  );
}
