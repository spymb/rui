import React, {Fragment, ReactFragment, ReactNode} from 'react';
import ReactDOM from 'react-dom';
import './dialog.scss';
import Icon from '../icon/icon';
import {scopedClassMarker} from '../helpers/classMaker';

interface Props {
  visible: boolean;
  buttons?: ReactFragment;
  onClose: React.MouseEventHandler;
  closeOnClickMask?: boolean;
}

const scopedClass = scopedClassMarker('rui-dialog');
const sc = scopedClass;

const Dialog: React.FunctionComponent<Props> = (props) => {
  const onClickClose: React.MouseEventHandler = (e) => {
    props.onClose(e);
  };
  const onClickMask: React.MouseEventHandler = (e) => {
    if (props.closeOnClickMask) {
      props.onClose(e);
    }
  };
  const result = props.visible && <Fragment>
    <div className={sc('mask')} onClick={onClickMask}>
    </div>
    <div className="rui-dialog">
      <div className={sc('close')} onClick={onClickClose}>
        <Icon name="close"/>
      </div>
      <header className={sc('header')}>提示</header>
      <main className={sc('main')}>
        {props.children}
      </main>
      <footer className={sc('footer')}>
        {props.buttons}
      </footer>
    </div>
  </Fragment>;
  return (ReactDOM.createPortal(result, document.body));
};

Dialog.defaultProps = {
  closeOnClickMask: false
};

const model = (content: ReactNode, buttons?: ReactFragment, afterClose?: () => void) => {
  const close = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };
  const component = <Dialog
    visible={true}
    buttons={buttons}
    onClose={() => {
      close();
      afterClose && afterClose();
    }}>
    {content}
  </Dialog>;
  const div = document.createElement('div');
  document.body.append(div);
  ReactDOM.render(component, div);
  return close;
};

const alert = (content: string) => {
  const button = <button onClick={() => close()}>OK</button>;
  const close = model(content, button);
};

const confirm = (content: string, yes?: () => void, no?: () => void) => {
  const onYes = () => {
    close();
    yes && yes();
  };
  const onNo = () => {
    close();
    no && no();
  };
  const buttons = <Fragment>
    <button onClick={onYes}>yes</button>
    <button onClick={onNo}>no</button>
  </Fragment>;
  const close = model(content, buttons, no);
};

export {model, alert, confirm};

export default Dialog;