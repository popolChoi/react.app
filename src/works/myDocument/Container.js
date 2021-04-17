import React, { Component, Fragment } from 'react';
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
} from 'semantic-ui-react';

export default class Container extends Component {
  render() {
    return (
      <Fragment>
        <div style={{ width: '100%', alignItems: '' }}>
          <Header as="h1">
            Interactive Developer
            <Header.Subheader>개발자 최수지입니다</Header.Subheader>
          </Header>
          <br />
          <br />
          <br />

          {/* <Card>
            <Image src="/images/avatar/large/matthew.png" wrapped ui={false} />
            <Card.Content>
              <Card.Header>Matthew</Card.Header>
              <Card.Meta>
                <span className="date">Joined in 2015</span>
              </Card.Meta>
              <Card.Description>
                Matthew is a musician living in Nashville.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="user" />
                22 Friends
              </a>
            </Card.Content>
          </Card> */}

          <Grid divided="vertically">
            <Grid.Row columns={2}>
              <Grid.Column>
                <Image src="https://react.semantic-ui.com/images/wireframe/square-image.png" size="medium" circular />
              </Grid.Column>
              <Grid.Column>
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
          <br />

          <Grid columns="equal">
            <Grid.Row>
              <Grid.Column>
                <Header as="h1" dividing>
                  #Introduce
                </Header>
                <div style={{ lineHeight: 1.75, fontSize: '1.0625em' }}>
                  <p> 2년차 개발자로 웹 서비스 개발/배포/운영을 경험하였습니다. 주로 frontEnd 개발을 담당했으며 하였습니다.</p>
                  <p>
                    LGCNS의 DevOn JavaFramework기반의 서비스의 운영을 시작으로 300억규모의 포스코MES3.0 개발 프로젝트에 참여 하였습니다
                    주로 React.js의 frontEnd를 전담으로 책임지며 많은 경험을 하였습니다.
                    현재는 다우기술의 프로잭트에 참여중이며 vue.js기반의 frontEnd공통폼을 개발하며 구성원들의 단순/루틴 업무를 개선하기 위해 노력하고 있습니다.
                  </p>
                  <p>
                    반복되는 일을 자동화하고 비효율적인 코드를 개선하는 일을 좋아합니다.
                    이를 위해 빠르게 개발하고 배포하는 역량과 데이터를 활용하여 유저를 이해하는 역량을 쌓고자 노력해왔습니다.
                    또한, 큰 임팩트는 혼자가 아닌 함께 만들 수 있다고 생각하기에 다양한 직무의 팀과 적극적으로 커뮤니케이션하며 협업해왔습니다.
                  </p>
                </div>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Header as="h1" dividing>
                  #Work Experience
                </Header>
                <Grid columns="equal">
                  <Grid.Row>
                    <Grid.Column width={5}>
                      <Header as="h5">
                        토피아 정보기술
                        <Header.Subheader>2019-02~</Header.Subheader>
                      </Header>
                    </Grid.Column>
                    <Grid.Column>
                      SI 개발자
                    </Grid.Column>
                  </Grid.Row>
                </Grid>

              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Header as="h1" dividing>
                  #Skill
                </Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Header as="h1" dividing>
                  #Education
                </Header>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          {/*

          <List>
            <List.Item>
              <List.Icon name="users" />
              <List.Content>Semantic UI</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="marker" />
              <List.Content>New York, NY</List.Content>
            </List.Item>phone square
            <List.Item>
              <List.Icon name="mail" />
              <List.Content>
                <a href="mailto:jack@semantic-ui.com">jack@semantic-ui.com</a>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="linkify" />
              <List.Content>
                <a href="http://www.semantic-ui.com">semantic-ui.com</a>
              </List.Content>
            </List.Item>
          </List>

          <Table collapsing>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Status</Table.HeaderCell>
                <Table.HeaderCell>Notes</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>John</Table.Cell>
                <Table.Cell>Approved</Table.Cell>
                <Table.Cell>None</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Jamie</Table.Cell>
                <Table.Cell>Approved</Table.Cell>
                <Table.Cell>Requires call</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Jill</Table.Cell>
                <Table.Cell>Denied</Table.Cell>
                <Table.Cell>None</Table.Cell>
              </Table.Row>
            </Table.Body>

            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell>3 People</Table.HeaderCell>
                <Table.HeaderCell>2 Approved</Table.HeaderCell>
                <Table.HeaderCell />
              </Table.Row>
            </Table.Footer>
          </Table> */}
        </div>
      </Fragment>
    );
  }
}
