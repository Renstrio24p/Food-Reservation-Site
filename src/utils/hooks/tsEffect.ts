type EffectCallback = () => void;

export function tsEffect(callback: EffectCallback, dependencies: any[]) {
    callback();

    dependencies.forEach(dep => {
        window.addEventListener(dep, callback);
    });

    return () => {
        dependencies.forEach(dep => {
            window.removeEventListener(dep, callback);
        });
    };
}
