import React, { Component, Fragment} from 'react';
import {
  Header,
  Table,
  Rating,
  List,
  Card,
  Icon,
  Image,
  Grid,
  Label,
  Segment,
  Button,
  Divider,
  Ref
} from 'semantic-ui-react';

import Typography from 'common/typography';

export default class Container extends Component {
  mainFef = React.createRef();
  // introduceFef = React.createRef();

  

  workExperience = [
    {
      Header: '다우기술',
      time: '2020-12 ~',
      skillList: ['Vue.js', 'Axios', 'CSS', 'Spring Boot', 'Java', 'JavaScript', 'PHP'],
      duty: 'Full stack',
      Content: (
        <List>
          <List.Item>
            <List.Header>#사방넷 고도화</List.Header>
            <List.List>
              <List.Item>공통 Component 개발, 외부 쇼핑몰 api 연동 작업</List.Item>
            </List.List>
          </List.Item>
        </List>
      ),
    },
    {
      Header: '포스코 ict ',
      time: '2019-07 ~ 2021-12',
      duty: 'Front-End',
      skillList: ['React.js', 'Node.js', 'MobX', 'JavaScript', 'Spring Boot', 'NoSQL'],
      Content: (
        <List>
          <List.Item>
            <List.Header>#포스코 mes3.0 개발</List.Header>
            <List.List>
              <List.Item>
                <List.Header> 포스코 mes3.0 파견업무</List.Header>
                <List.Description>2019-07 ~ 2021-06</List.Description>
                광양, 포항 재철소 실무자 협의 개발 및 mes최종 마무리
              </List.Item>
              <br />
              <List.Item>
                <List.Header>포스코 mes3.0 개발</List.Header>
                <List.Description>2019-07 ~ 2021-06</List.Description>
                mes3.0 재강부 프론트앤드 담당
              </List.Item>
            </List.List>
          </List.Item>
        </List>
      ),

    },
    {
      Header: 'LGcns',
      time: '2019-03 - 2019-07',
      duty: 'Full stack',
      skillList: ['JSP', 'eGovFramework', 'DevOnJavaFramework', 'Java', 'SQL'],
      Content: (
        <List>
          <List.Item>
            <List.Header>#lg스마일 운영</List.Header>
            <List.List>
              <List.Item>lg스마일 sw 업무</List.Item>
            </List.List>
          </List.Item>
        </List>
      ),
    },
  ]

  state = {
    introduce: false,
    WorkExperience: false,
    skill: false, education: false,
  }

  componentDidMount() {
    if(this.mainFef){

      const mainCurrent =  this.mainFef.current
      mainCurrent.addEventListener('scroll', (e) => {
        let scrollLocation = mainCurrent.scrollTop
        let windowHeight = mainCurrent.clientHeight;
        let fullHeight = mainCurrent.scrollHeight;
        
        if(mainCurrent.scrollTop > 70){
          if(!this.state.introduce){
            this.setState({ introduce: true})
          }
        }
        
        if(mainCurrent.scrollTop > 300){
          if(!this.state.WorkExperience){
            this.setState({ WorkExperience: true})
          }
        }

        if(mainCurrent.scrollTop > 1000){
          if(!this.state.skill){
            this.setState({ skill: true})
          }
        }

        if(mainCurrent.scrollTop >1300){
          if(!this.state.education){
            this.setState({ education: true})
          }
        }

        if(scrollLocation + windowHeight >= fullHeight){
          console.log('끝')
        }
      })
    }
  }


  render() {
    const {introduce, WorkExperience, skill, education} = this.state
    return (
      <Fragment>
        <div className="myDocument" ref={this.mainFef}>
          <br />
          <br />

          <Header as="h1">
            {'>'}
            <Typography
              random
              text="Interactive Developer"
            />
            <Header.Subheader>
              <Typography
                random
                text="개발자 최수지입니다"
                line={false}
              />
            </Header.Subheader>
          </Header>
          <br />
          <br />
          <br />

          <Grid divided="vertically">
            <Grid.Row columns={2}>
              <Grid.Column>
                <Image
                  src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                  circular
                  centered
                />
              </Grid.Column>
              <Grid.Column className="mainList" style={{ marginTop: '15rem' }}>
                <List>
                  <List.Item>
                    <List.Icon name="phone" />
                    <List.Content>10 47376211</List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="mail" />
                    <List.Content>
                      <a href="mailto:choisuji0217@naver.com">choisuji0217@naver.com</a>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="github" />
                    <List.Content>
                      <a href="https://github.com/popolChoi/react.app">https://github.com/popolChoi</a>
                    </List.Content>
                  </List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Grid columns="equal">
            <Grid.Row >
             <Grid.Column className="fadein">
             {introduce?
              <>
                <Header as="h1"  >
                  #<Typography
                    random
                    text="Introduce"
                    line={false}
                  />
                </Header>

                <div style={{ lineHeight: 2, fontSize: '2em' }}>
                  <p> 2년차 개발자로 웹 서비스 개발/배포/운영을 경험하였습니다. 주로 frontEnd 개발을 담당했으며 하였습니다.</p>
                  <p>
                    LGCNS의 DevOn JavaFramework기반의 서비스의 운영을 시작으로 300억규모의 포스코MES3.0 개발 프로젝트에 참여 하여<br />
                    React.js의 frontEnd를 전담으로 책임지며 많은 경험을 하였습니다.<br />
                    현재는 다우기술의 프로잭트에 참여중이며 vue.js기반의 frontEnd공통폼을 개발하며 구성원들의 단순/루틴 업무를 개선하기 위해 노력하고 있습니다.
                  </p>
                  <p>
                    반복되는 일을 자동화하고 비효율적인 코드를 개선하는 일을 좋아합니다.<br />
                    이를 위해 빠르게 개발하고 배포하는 역량과 데이터를 활용하여 유저를 이해하는 역량을 쌓고자 노력해왔습니다.<br />
                    또한, 큰 임팩트는 혼자가 아닌 함께 만들 수 있다고 생각하기에 다양한 직무의 팀과 적극적으로 커뮤니케이션하며 협업해왔습니다.<br />
                  </p>
                </div>
              </>: <div style={{height:'1000px'}}/>}
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                {WorkExperience?
                  <>
                <Header as="h1">
                  #<Typography
                    random
                    text="Work Experience"
                    line={false}
                  />
                </Header>
                <List>
                  <List.Item>
                    <List.Header as="h4">토피아 정보기술 (2019-02~)</List.Header>
                    <List.Description>SI Developer</List.Description>
                    <List.List style={{ paddingLeft: '50px' }}>
                      {this.workExperience.map((e, i) => (
                        <List.Item className="hover" key={i}>
                          <Grid columns="equal">
                            <Grid.Row>
                              <Grid.Column width={4}>
                                <List.Header as="h4">{e.Header}</List.Header>
                                <List.Description style={{ fontSize: '12px' }}>{e.duty}<br />({e.time})</List.Description>
                              </Grid.Column>
                              <Grid.Column>
                                <List.Content>
                                  <div>
                                    {e.skillList ? e.skillList.map((list, j) => <Button content={list} size="mini" key={j} />) : null}
                                  </div>
                                  <div>
                                    {e.Content}
                                  </div>
                                </List.Content>
                              </Grid.Column>
                            </Grid.Row>
                          </Grid>

                        </List.Item>
                      ))}
                    </List.List>
                  </List.Item>
                </List>
                </>: <div style={{height:'1000px'}}/>}

              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
{     skill?           <>
<Header as="h1">
                  #
                  <Typography
                    random
                    text="Skill"
                    line={false}
                  />
                  <Header.Subheader>
                    주요 스킬
                  </Header.Subheader>
                </Header>
                <div>
                  {['JavaScript',
                    'React.js',
                    'Vue.js',
                    'Node.js',
                    'HTML5',
                    'SCSS',
                    'Spring Boot',
                    'Java',
                  ].map((list, j) => <Button content={list} size="huge" key={j} className="hover" />) }
                </div></>: <div style={{height:'1000px'}}/>}


              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                {education?<><Header as="h1">
                  #
                  <Typography
                    random
                    text="Education"
                    line={false}
                  />
                </Header>

                <div><p>조선대학교 공예디자인과 </p></div></>: <div style={{height:'1000px'}}/>}

              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </Fragment>
    );
  }
}
