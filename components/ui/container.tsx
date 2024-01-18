
interface ContainerProps {
    children: React.ReactNode;
};

const Container = function({ children } : ContainerProps)
{
    return (
        <div className="mx-auto max-w-7xl">
            { children }
        </div>
    );
}

export default Container;