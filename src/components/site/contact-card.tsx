import { IconBrandFacebook, IconMail, IconPhone } from '@tabler/icons-react'
import { siteDefaults } from '~/lib/site-defaults'

export function ContactCard() {
  const { contact } = siteDefaults
  return (
    <aside className="info" aria-labelledby="contact-title">
      <h3 id="contact-title">Contact</h3>
      <div className="info-row">
        <IconBrandFacebook size={20} />
        <div>
          <small>Facebook</small>
          <a href={contact.facebook} target="_blank" rel="noopener">
            {contact.facebookHandle}
          </a>
        </div>
      </div>
      <div className="info-row">
        <IconMail size={20} />
        <div>
          <small>Email</small>
          {contact.email ? <a href={`mailto:${contact.email}`}>{contact.email}</a> : <span className="placeholder">[your email]</span>}
        </div>
      </div>
      <div className="info-row">
        <IconPhone size={20} />
        <div>
          <small>Phone</small>
          {contact.phone ? <span>{contact.phone}</span> : <span className="placeholder">[your number]</span>}
        </div>
      </div>
      <a href={contact.facebook} target="_blank" rel="noopener" className="btn btn-primary">
        Message us on Facebook
      </a>
    </aside>
  )
}
