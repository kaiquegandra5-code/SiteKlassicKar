// Dados de contato centralizados — altere aqui e reflete no site inteiro.

// WhatsApp: número no formato 55DDDxxxxxxxxx (sem espaços).
// Para o número 11 99378-4778 → "5511993784778"
export const WHATSAPP_NUMBER = '5511993784778'
export const WHATSAPP_DISPLAY = '+55 (11) 99378-4778'

// Mensagens pré-formatadas para WhatsApp (URL-encoded automático nos componentes)
export const WHATSAPP_MSG_GENERAL = encodeURIComponent(
  'Olá Klassic Kar! Quero saber mais sobre os serviços.'
)
export const WHATSAPP_MSG_PACKAGE = encodeURIComponent(
  'Olá Klassic Kar! Quero assinar um pacote.'
)
export const WHATSAPP_MSG_SINGLE = encodeURIComponent(
  'Olá Klassic Kar! Quero agendar um serviço avulso.'
)

export const whatsappLink = (msg = WHATSAPP_MSG_GENERAL) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`

// Redes sociais
export const INSTAGRAM_HANDLE = '@klassickar.estetica'
export const INSTAGRAM_URL = 'https://instagram.com/klassickar.estetica'

// Endereço
export const ADDRESS = 'Av. Premium, 1234 — São Paulo / SP'
export const EMAIL = 'contato@klassickar.com.br'

// Social links (para o Footer)
export const SOCIAL_LINKS = [
  { icon: 'instagram', label: 'Instagram', href: INSTAGRAM_URL },
  { icon: 'facebook',  label: 'Facebook',  href: 'https://facebook.com/klassickar' },
  { icon: 'youtube',   label: 'YouTube',   href: 'https://youtube.com/@klassickar' },
]