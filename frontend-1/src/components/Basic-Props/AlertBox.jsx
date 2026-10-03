import './AlertBox.css';

function AlertBox({type = "info", title, message }) {
    return (
        <div className={`alert-box  alert-${type}`}>
            <h3>{title}</h3>
            <p>{message}</p>
        </div>
    );
}
export default AlertBox;