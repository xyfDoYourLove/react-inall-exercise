import React from "react";
import {Button, Col, Input, message, Row} from "antd";
import InfoDisplayer from "../utils/InfoDisplayer";
import {Link} from "react-router-dom";

class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            time: '',
            input: ''
        };

        this.handleInputChange = (event) => {
            if (/^\d*$/.test(event.target.value)) {
                this.setState({input: event.target.value});
            } else {
                message.error('请输入纯数字')
            }
        }

        this.start = () => {
            this.setState({time: 'START'})
            setTimeout(() => {
                this.setState({time: this.state.input})
                const timer = setInterval(() => {
                    this.setState({time: String(this.state.time - 1)})
                    if (this.state.time === '0') {
                        clearInterval(timer)
                        this.setState({time: 'END'})
                    }
                }, 1000)
            }, 1000)
        }

    }

    render() {
        return (
            <div>
                <div style={{width: '30%', margin: 'auto'}}>
                    <Row justify={'center'}>
                        <Col span={24}>
                            <InfoDisplayer info={this.state.time} placeholder={'please start a timer'} />
                        </Col>
                    </Row>
                    <Row justify={'center'}>
                        <Col span={8}>
                            <Button type={'primary'} onClick={this.start}>S T A R T</Button>
                        </Col>
                        <Col span={8}>
                            <Input value={this.state.input} placeholder='enter seconds.' onChange={this.handleInputChange} />
                        </Col>
                        <Col span={8}>
                            <Link to={'/'}><Button type={'danger'}>B A C K</Button></Link>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

Timer.propTypes = {};

export default Timer;
