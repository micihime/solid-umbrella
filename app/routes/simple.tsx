import type { ActionFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const name = formData.get("name");
  console.log(name);

  const file = formData.get("file")  as File;
  console.log(file);
  
  console.log(file.name);
  console.log(file.type);
  console.log(file.size);
  console.log(Buffer.from(await file.arrayBuffer()));

  return redirect("/simple");
};

export default function Index() {
  return (
    <form method="post" encType="multipart/form-data" action="/simple">
      <h1>Simple</h1>

      <label htmlFor="name">Name</label>
      <input id="name" name="name" type="text" />
      <div>
        <label htmlFor="file">File</label>
        <input id="file" name="file" type="file" />
      </div>
      <button type="submit">Upload</button>
    </form>
  );
}
