import React from 'react'
import BraftEditor from 'braft-editor'

import 'braft-editor/dist/braft.css'

class RichEditor extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      htmlContent: '',
      isReady: false
    }
  }

  componentDidMount() {
    this.state.isReady = true
  }

  componentWillUnmount() {
    this.state.isReady = false
  }

  handleHTMLChange (htmlContent) {
    if (!this.state.isReady) {
      return false
    }
    const { onChange } = this.props
    this.setState({ htmlContent })
    onChange(htmlContent)
  }

  render () {
    const value = this.props.value;
    const editorProps = {
      placeholder: '输入软件的详细介绍信息',
      initialContent: value,
      onHTMLChange: this.handleHTMLChange.bind(this),
      viewWrapper: '.editor',
      contentFormat: 'html'
    }

    return (
      <div className='editor' style={styles.editor}>
        <BraftEditor {...editorProps} />
      </div>
    )
  }
}

export default RichEditor

const styles = {
  editor: {
    backgroundColor: '#FFF',
    border: '1px solid #d9d9d9'
  }
}
