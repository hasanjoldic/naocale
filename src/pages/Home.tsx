import { Link } from "react-router-dom";
import { useState } from "react";
import { Button, Card, Text, Group, Stack, Badge, Title } from "@mantine/core";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "../App.css";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <Stack align="center" gap="lg" p="xl">
      <Group gap="md">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </Group>

      <Title order={1}>Vite + React + Mantine</Title>

      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Stack align="center" gap="md">
          <Badge color="blue" variant="light">
            Mantine is working!
          </Badge>
          <Text size="lg" fw={500}>
            Count: {count}
          </Text>
          <Button onClick={() => setCount((count) => count + 1)} variant="filled">
            Increment Counter
          </Button>
          <Text size="sm" c="dimmed">
            Edit <code>src/App.tsx</code> and save to test HMR
          </Text>
        </Stack>
      </Card>

      <Group gap="md" mt="md">
        <Button component={Link} to="/about" variant="outline">
          Go to About
        </Button>
      </Group>

      <Text size="sm" c="dimmed">
        Click on the Vite and React logos to learn more
      </Text>
    </Stack>
  );
}
