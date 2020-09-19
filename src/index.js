import React from "react";
import { render } from "react-dom";
import "./index.css";
import { GeistProvider, CssBaseline } from '@geist-ui/react'
import { Row, Col, Input, Button, Fieldset, Divider } from '@geist-ui/react'
import { GitBranch } from '@geist-ui/react-icons'
import { Icon } from '@iconify/react';
import gitlabIcon from '@iconify/icons-logos/gitlab';
import githubIcon from '@iconify/icons-logos/github-icon';
import bitbucketIcon from '@iconify/icons-logos/bitbucket';


const myTheme = {}

const App = () => (
  
  <GeistProvider theme={myTheme}>
    <CssBaseline />
  
    <div style={{ backgroundColor: "#fafafa", fontFamily: 'Inter'}}>
      <header>
        <nav style={{height: '64px', backgroundColor: '#fff', borderBottom: '1px solid #eaeaea'}}>
        </nav>
      </header>
      <div class="flex justify-center">
        <div class="flex content-center flex-wrap" style={{height: 'calc(100vh - 65px'}}>

          <div class="shadow-2xl" >
            <Fieldset style={{ width: '640px', border: "none"}}>
              <Fieldset.Content style={{ paddingTop: '32px', paddingBottom: '32px', paddingLeft: '32px' }}>
                <div style={{display: "flex"}}>
                  <div>
                    <h3>Import a Git Repository</h3>
                  </div>
                  <div style={{marginLeft: 'auto', marginRight: '25px'}}>
                    <Icon style={{width: '32px', height: '32px'}}icon={githubIcon} />
                  </div>
                  <div style={{marginRight: '25px'}}>
                    <Icon style={{width: '32px', height: '32px'}} icon={gitlabIcon} />
                  </div>
                  <div>
                    <Icon style={{width: '32px', height: '32px'}} icon={bitbucketIcon} />
                  </div>
                </div>
              </Fieldset.Content>
              <Divider y={0} />
              <Fieldset.Content style={{ paddingTop: '32px', paddingBottom: '32px', paddingLeft: '32px'}}>
                <p>Enter the <b>URL of a Git repository</b> to deploy it:</p>
                <div >
                  <Input style={{ width: '508px' }} label={<GitBranch />} placeholder="https://my-provider.com/my-organization/my-project" />
                </div>
              </Fieldset.Content>
              <Fieldset.Footer style={{paddingLeft: '32px', paddingRight: '32px'}}>
                <Col span={16}>
                  <Row>
                    <Button auto size="small">Back</Button>
                  </Row>
                </Col>                
                <Col span={16}>
                  <Row justify="end">
                    <Button auto disabled size="small" type="success">Continue</Button>
                  </Row>
                </Col>
              </Fieldset.Footer>
            </Fieldset>
          </div>


        </div>
      </div>
    </div>
  </GeistProvider>
  
);

render(<App />, document.getElementById("root"));
