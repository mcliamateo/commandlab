import { Container, Text, Title } from '@mantine/core'
import { Link } from '@tanstack/react-router'

export function NotFound() {
  return (
    <Container size="sm" py={96} ta="center">
      <Text ff="monospace" c="dimmed">
        C:\&gt; error 404
      </Text>
      <Title order={1} mt="sm" tt="uppercase">
        Page not found
      </Title>
      <Text c="dimmed" mt="sm">
        That command didn't match anything.
      </Text>
      <Link to="/" className="btn btn-primary" style={{ marginTop: 28 }}>
        Back to home
      </Link>
    </Container>
  )
}
