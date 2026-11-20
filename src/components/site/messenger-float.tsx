// Floating Messenger button in the corner. Clicking it asks whether to open the
// Facebook page or jump straight into a Messenger chat with it.
import { Anchor, Modal, Stack, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconBrandFacebook, IconBrandMessenger } from '@tabler/icons-react'
import { siteDefaults } from '~/lib/site-defaults'

export function MessengerFloat() {
  const [opened, { open, close }] = useDisclosure(false)
  const { facebook, messenger } = siteDefaults.contact

  return (
    <>
      <button
        type="button"
        className="messenger-float"
        onClick={open}
        aria-label="Chat with CommandLab on Messenger"
        title="Chat with us on Messenger"
      >
        <IconBrandMessenger size={26} />
        <span className="messenger-float-label">Chat with us</span>
      </button>

      <Modal opened={opened} onClose={close} title="Chat with CommandLab" centered size="sm">
        <Stack gap="md">
          <Text size="sm">
            We're on Facebook. Would you like to open our page, or open the chat directly in Messenger?
          </Text>
          <a href={facebook} target="_blank" rel="noopener" className="btn btn-ghost" onClick={close}>
            <IconBrandFacebook size={18} />
            View Facebook page
          </a>
          <a href={messenger} target="_blank" rel="noopener" className="btn btn-primary" onClick={close}>
            <IconBrandMessenger size={18} />
            Open in Messenger
          </a>
          <Anchor component="button" type="button" size="xs" c="dimmed" onClick={close}>
            Not now
          </Anchor>
        </Stack>
      </Modal>
    </>
  )
}
