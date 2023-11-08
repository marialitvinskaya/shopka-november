export default function priceAfterDiscount(props) {
    return (
        (props.price - ((props.price * props.discount) / 100)).toFixed(2)
    )
}
