import Image from "next/image";
import Input from "@/components/Input";
export default function Home() {
  return (
    <>
      <div className="overflow-auto scrollbar-hidden h-screen bg-gradient-to-b from-blue-200 via-blue-400 to-blue-800">
        <Input />
      </div>
    </>
  );
}
