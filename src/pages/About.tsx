import { Link } from "react-router-dom";
import { Button, Card, Text, Stack, Title, List, ThemeIcon } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

export default function About() {
  return (
    <Stack align="center" gap="lg" p="xl">
      <Title order={1}>About Page</Title>

      <Card shadow="md" padding="xl" radius="md" withBorder maw={600}>
        <Stack gap="md">
          <Text size="lg" fw={500}>
            Technologies Used:
          </Text>

          <List
            spacing="sm"
            size="sm"
            center
            icon={
              <ThemeIcon color="teal" size={24} radius="xl">
                <IconCheck size={16} />
              </ThemeIcon>
            }
          >
            <List.Item>Vite - Fast build tool</List.Item>
            <List.Item>React - UI library</List.Item>
            <List.Item>TypeScript - Type safety</List.Item>
            <List.Item>SWC - Fast compilation</List.Item>
            <List.Item>React Router - Client-side routing</List.Item>
            <List.Item>Mantine - Component library</List.Item>
          </List>

          <Text size="sm" c="dimmed" mt="md">
            This is an example About page demonstrating Mantine components working with React Router.
          </Text>
        </Stack>
      </Card>

      <Button component={Link} to="/" variant="light" size="md">
        Back to Home
      </Button>
    </Stack>
  );
}
