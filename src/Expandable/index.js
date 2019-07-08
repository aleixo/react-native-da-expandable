import Container from './Container';
import withContext from './withContext';
import PureElement from './Element';

const Element = withContext(PureElement);

export {
  Element,
  Container,  
}