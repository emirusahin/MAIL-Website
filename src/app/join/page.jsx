
export default function FormPage() {

    return (
        <div className="flex flex-col gap-y-6 align-center">
            <input type="text" placeholder="Full Name" className="input input-bordered w-1/3" />
            <input type="text" placeholder="Email" className="input input-bordered w-1/3" />
        </div>
    );
}