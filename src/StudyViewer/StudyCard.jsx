import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Collapse } from 'antd';
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';

import ReduxStudyDetails from './ReduxStudyDetails';
import './StudyViewer.css';

const { Panel } = Collapse;

class StudyCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      panelExpanded: false,
    };
  }

    onCollapseChange = () => {
      this.setState(prevState => ({
        panelExpanded: !prevState.panelExpanded,
      }));
    };

    render() {
      return (
        <Card
          className='study-viewer__card'
          title={<Link to={`/study-viewer${this.props.data.url}`}>{this.props.data.title}</Link>}
        >
          <Collapse
            expandIcon={({ isActive }) =>
              ((isActive) ? <MinusCircleOutlined /> : <PlusCircleOutlined />)}
            onChange={this.onCollapseChange}
            ghost
          >
            <Panel
              header={(this.state.panelExpanded) ? 'Hide details' : 'Show details'}
              key='1'
            >
              <ReduxStudyDetails data={this.props.data} />
            </Panel>
          </Collapse>
        </Card>
      );
    }
}

StudyCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    meta: PropTypes.object,
    hasAccess: PropTypes.bool.isRequired,
  }).isRequired,
};

export default StudyCard;