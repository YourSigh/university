export default (el: any, binding: any) => {
    let node = document.createElement('div');
    const rootNodeStyle: Partial<CSSStyleDeclaration> = {
        position: 'absolute',
        zIndex: '2000',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        margin: '0',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
    };

    for (const key in rootNodeStyle) {
        const value = rootNodeStyle[key];
        if (value !== undefined) {
            node.style[key as any] = value;
        }
    }


    el.appendChild(node);
    if (binding.value) {
        node.style.display = 'block';
        el.className = 'el-loading-parent--relative'
    } else {
        node.style.display = 'none';
        el.className = ''
    }
}