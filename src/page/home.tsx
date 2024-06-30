import { EuiPageTemplate, EuiText } from "@elastic/eui"
import { FunctionComponent } from "react"

const Home:FunctionComponent = () =>{
    return <>
    <EuiPageTemplate panelled restrictWidth bottomBorder >
        <EuiPageTemplate.Section>
        <EuiText textAlign="center">
          <strong>
            Stack EuiPageTemplate sections and headers to create your custom
            content order.
          </strong>
        </EuiText>
        </EuiPageTemplate.Section>
        {/* <EuiPageTemplate.Header  rightSideItems={[]} />
        <EuiPageTemplate.Section>{<>content</>}</EuiPageTemplate.Section> */}


    </EuiPageTemplate>
    </>
}

export default Home