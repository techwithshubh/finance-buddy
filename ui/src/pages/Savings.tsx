import { Link } from "react-router-dom";

export default function Savings() {
  return (
    <div>
        <div>
            <span>Home</span>
            <span>/</span>
            <span>Savings</span>
            <p>This is another version</p>
            <button>
              <Link to={`/savings/add`}>Add Saving</Link>
            </button>
        </div>
    </div>
  )
}
