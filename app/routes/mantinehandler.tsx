import { Button, FileInput, Group, Title, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import {
  unstable_composeUploadHandlers,
  unstable_createFileUploadHandler,
  unstable_createMemoryUploadHandler,
  unstable_parseMultipartFormData,
  type ActionFunctionArgs,
} from "@remix-run/node";
import { Form, useSubmit, redirect } from "@remix-run/react";

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

  return redirect("/mantinehandler");
};

export default function Index() {
  const form = useForm({
    initialValues: {
      name: "",
    },
  });
  const submit = useSubmit();

  return (
    <Form
      onSubmit={form.onSubmit((_v) =>
        submit(_v, { method: "POST", encType: "multipart/form-data" })
      )}
    >
      <Title>Mantine components using Remix parseMultipartFormData</Title>
      <TextInput
        label="Name"
        key={form.key("name")}
        {...form.getInputProps("name")}
      />

      <FileInput
        label="File"
        name="file"
        key={form.key("file")}
        {...form.getInputProps("file")}
      />
      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </Form>
  );
}
