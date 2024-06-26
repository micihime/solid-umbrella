import {
    redirect,
    unstable_composeUploadHandlers,
    unstable_createFileUploadHandler,
    unstable_createMemoryUploadHandler,
    unstable_parseMultipartFormData,
    type ActionFunctionArgs,
  } from "@remix-run/node";
  
  export const action = async ({ request }: ActionFunctionArgs) => {
    const uploadHandler = unstable_composeUploadHandlers(
      unstable_createFileUploadHandler({
        maxPartSize: 5_000_000,
        file: ({ filename }) => filename,
      }),
      // parse everything else into memory
      unstable_createMemoryUploadHandler()
    );
  
    const formData = await unstable_parseMultipartFormData(
      request,
      uploadHandler
    );
  
    const name = formData.get("name");
  console.log(name);

  const file = formData.get("file")  as File;
  console.log(file);
  
  console.log(file.name);
  console.log(file.type);
  console.log(file.size);
  console.log(Buffer.from(await file.arrayBuffer()));
  
    return redirect("/handler");
  };
  
  export default function Index() {
    return (
      <form method="post" encType="multipart/form-data" action="/handler">
        <h1>Using Remix parseMultipartFormData</h1>
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
  