import style from './index.module.css'

// Utils
import cn from 'classnames'

// Components
import Container, { Row } from 'components/Container'

// Hooks
import { useTranslation } from 'react-i18next'
import useTransitionStage from 'hooks/useTransitionStage'

type Props = {
  certifications: string[]
}

const images: { [keys: string]: string } = {
  'aws-certified-cloud-practitioner': '/images/aws-cloud-practitioner.png',
  'aws-certified-developer': '/images/aws-developer.png',
  'google-cloud-certified': '/images/google-cloud.png',
  'microsoft-certified': '/images/microsoft-certified.png'
}

function Certifications({ certifications }: Props) {
  const { t } = useTranslation('translation')

  const ts = useTransitionStage()

  const classes = cn(style.root, ts && style[ts])

  return (
    <div className={classes}>
      <Container grid withoutMenu>
        <Row start={1} end={1}>
          <h3 className={style.title}>{t('certifications')}</h3>
        </Row>
        <Row start={2} end={2} className={style.container}>
          {certifications.map((certification) => (
            <figure className={style.figure} key={certification}>
              <img
                src={images[certification.toLowerCase()]}
                alt={certification}
                title={certification}
              />
              <figcaption>{certification}</figcaption>
            </figure>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Certifications