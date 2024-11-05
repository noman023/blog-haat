import { Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";

export default function FooterComponent() {
  return (
    <Footer container className="bg-slate-950">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="/"
              src="https://flowbite.com/docs/images/logo.svg"
              alt="Flowbite Logo"
              name="Blog Haat"
            />
          </div>

          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Flowbite</Footer.Link>
                <Footer.Link href="#">Tailwind CSS</Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Github</Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>

        <Footer.Divider />

        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="https://nomans-portfolio98.vercel.app/"
            by="Noman"
            year={2024}
          />

          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="https://github.com/noman023/"
              icon={BsGithub}
              target="_blank"
            />
            <Footer.Icon
              href="https://www.linkedin.com/in/noman23/"
              icon={BsLinkedin}
              target="_blank"
            />
            <Footer.Icon
              href="https://x.com/noman_1998"
              icon={BsTwitter}
              target="_blank"
            />
            <Footer.Icon
              href="https://www.facebook.com/98noman"
              icon={BsFacebook}
              target="_blank"
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
