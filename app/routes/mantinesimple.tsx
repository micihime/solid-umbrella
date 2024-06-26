import { Button, FileInput, Group, Title, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { type ActionFunctionArgs } from "@remix-run/node";
import { Form, useSubmit, redirect } from "@remix-run/react";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const name = formData.get("name");
  console.log(name);

  const file = formData.get("file")  as File;
  console.log(file);
  
  console.log(file.name);
  console.log(file.type);
  console.log(file.size);

  return redirect("/mantinesimple");
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
      <Title>Mantine components in simple form</Title>
      <TextInput
        label="Name"
        key={form.key("name")}
        {...form.getInputProps("name")}
      />
      <FileInput
        label="File"
        key={form.key("file")}
        {...form.getInputProps("file")}
      />
      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </Form>
  );
}
