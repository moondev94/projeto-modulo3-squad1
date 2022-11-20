import 'bootstrap/dist/css/bootstrap.min.css';
import {'Card', 'CardFooter'} from 'reactstrap';

function Footer(){
  return (
    <Card
  className="my-2"
  style={{
    width: '18rem'
  }}
>
  <CardFooter>
    Todos os direitos reservados. 2022.
  </CardFooter>
</Card>

export default Footer;
