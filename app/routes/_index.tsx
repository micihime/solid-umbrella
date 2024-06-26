import type { MetaFunction } from "@remix-run/node";
import { Welcome } from "~/components/Welcome/Welcome";
import { ColorSchemeToggle } from "~/components/ColorSchemeToggle/ColorSchemeToggle";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Mantine Remix App" },
    { name: "description", content: "Welcome to Mantine!" },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>STEPS HOW TO REPRODUCE:</h1>
      <ol>
        <li>insert some text into the input, select some file to upload and submit</li>
        <li>check the console log in terminal</li>
      </ol>
      <p>when using simple form, I can see file name, size and content logged to the console.</p>
      <p>when using Mantine form with file input, I am not able to see the file content or anything.</p>
      
      <h2>Does not work</h2>
      <p>I am not able to read the file properties or the content.</p>
      <ul>        
        <li>
          <Link to="/mantinesimple">Mantine components in simple form</Link>
        </li>
        <li>
          <Link to="/mantinehandler">
            Mantine components using Remix parseMultipartFormData
          </Link>
        </li>
      </ul>

      <h2>Works</h2>
      <ul>
        <li>
          <Link to="/simple">Simple form without Mantine</Link>
        </li>
        <li>
          <Link to="/handler">Simple form without Mantine, using Remix parseMultipartFormData to get the content of the file</Link>
        </li>
      </ul>

      <h3>Mantine that works - ONLY form without file input</h3>
      <ul>
        <li>
          <Link to="/mantinewithoutfile">Mantine form !without file input!</Link>
        </li>
      </ul>
    </div>
  );
}
