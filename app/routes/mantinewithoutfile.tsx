import { Button, Group, Title, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { type ActionFunctionArgs } from "@remix-run/node";
import { Form, useSubmit, redirect } from "@remix-run/react";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const name = formData.get("name");
  console.log(name);

  return redirect("/mantinewithoutfile");
};

export default function Index() {
  const form = useForm({
    initialValues: {
      name: "",
    },
  });
  const submit = useSubmit();

  return (
    <Form onSubmit={form.onSubmit((_v) => submit(_v, { method: "POST" }))}>
      <Title>Mantine form without file input</Title>
      <TextInput
        label="Name"
        key={form.key("name")}
        {...form.getInputProps("name")}
      />
      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </Form>
  );
}
