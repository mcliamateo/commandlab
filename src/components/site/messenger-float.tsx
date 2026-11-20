// Floating Messenger button in the corner: opens a chat with the CommandLab Facebook page.
import { IconBrandMessenger } from '@tabler/icons-react'
import { siteDefaults } from '~/lib/site-defaults'

export function MessengerFloat() {
  return (
    <a
      href={siteDefaults.contact.messenger}
      target="_blank"
      rel="noopener"
      className="messenger-float"
      aria-label="Chat with CommandLab on Messenger"
      title="Chat with us on Messenger"
    >
      <IconBrandMessenger size={26} />
    </a>
  )
}
