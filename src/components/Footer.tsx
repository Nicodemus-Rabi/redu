import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { draftMode } from "next/headers"; // Import draftMode

export default async function Footer() {
  const { isEnabled } = await draftMode(); // Await draftMode to check preview mode
  const client = createClient({ previewData: { isEnabled } }); // Pass preview data
  const settings = await client.getSingle("settings");

  return (
    <footer className="bg-gradient-to-r from-[#5E071C] to-[#8B0F2F] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="mb-4">
              <Image
                src="/logo.svg"
                alt="logo"
                width={80}
                height={80}
                className="p-2"
              />
            </Link>
            <p className="text-sm text-center md:text-left">
              Bringing you the finest cherries since 2023.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav>
              <ul className="space-y-2">
                {settings.data.navigation.map((item) => (
                  <li key={item.label}>
                    <PrismicNextLink
                      field={item.link}
                      className="hover:text-pink-200 transition-colors"
                    >
                      {item.label}
                    </PrismicNextLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic">
              <p>18 Adi haqi</p>
              <p>Adihawusi, CA 90210</p>
              <p>Email: info@guadagro.org</p>
              <p>Phone: (251) 123-4567</p>
            </address>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-pink-200 transition-colors">
                <FaFacebookF size={24} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="hover:text-pink-200 transition-colors">
                <FaTwitter size={24} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="hover:text-pink-200 transition-colors">
                <FaInstagram size={24} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="hover:text-pink-200 transition-colors">
                <FaLinkedinIn size={24} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-pink-200 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Butterfly|Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
