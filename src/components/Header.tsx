import { draftMode } from "next/headers"; // Ensure you import draftMode properly
import { createClient } from "@/prismicio";
import NavBar from "./Navbar";


export default async function Header() {
  // Await draftMode and check if it's enabled
  const { isEnabled } = await draftMode();

  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <header>
      <NavBar settings={settings} />
    </header>
  );
}

