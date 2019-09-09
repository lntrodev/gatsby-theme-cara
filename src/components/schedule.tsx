/** @jsx jsx */
import { jsx } from 'theme-ui'
import styled from '@emotion/styled'
import Divider from '../elements/divider'
import Inner from '../elements/inner'
import Content from '../elements/content'
import SVG from './svg'
import { UpDown, UpDownWide, waveAnimation } from '../styles/animations'
import ScheduleMDX from '../sections/schedule.mdx'

const InnerWave = styled.div`
  path {
    ${waveAnimation(`20s`)};
  }
`

const Schedule = ({ offset }: { offset: number }) => (
  <div>
    <Content speed={0.4} offset={offset}>
      <Inner>
        <div
          sx={{ marginTop: ['10em', '30em'], marginBottom: ['5em', '15em'] }}
        >
          <ScheduleMDX />
        </div>
      </Inner>
    </Content>
    <Divider speed={0.1} offset={offset}>
      <UpDown>
        <SVG
          icon="upDown"
          hiddenMobile
          width={8}
          color="icon_darkest"
          left="70%"
          top="20%"
        />
        <SVG
          icon="triangle"
          width={8}
          stroke
          color="icon_darkest"
          left="25%"
          top="5%"
        />
      </UpDown>
      <UpDownWide>
        <SVG
          icon="triangle"
          width={12}
          stroke
          color="icon_brightest"
          left="95%"
          top="50%"
        />
        <SVG
          icon="circle"
          width={6}
          color="icon_brightest"
          left="85%"
          top="15%"
        />
        <SVG
          icon="upDown"
          hiddenMobile
          width={8}
          color="icon_darkest"
          left="45%"
          top="10%"
        />
      </UpDownWide>
      <SVG icon="circle" width={6} color="icon_brightest" left="4%" top="20%" />
      <SVG icon="circle" width={12} color="icon_darkest" left="70%" top="60%" />
      <SVG icon="box" width={12} color="icon_darkest" left="20%" top="30%" />
      <SVG
        icon="hexa"
        width={8}
        stroke
        color="icon_darkest"
        left="80%"
        top="70%"
      />
    </Divider>
  </div>
)

export default Schedule
