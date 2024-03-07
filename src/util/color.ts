// 根据颜色值获取对应的 YIQ 亮度，返回黑色或白色
export function getContrastYIQ(hexcolor: string) {
    // 移除 # 号，如果存在
    hexcolor = hexcolor.replace("#", "");

    // 将十六进制颜色值转换为 RGB
    var r = parseInt(hexcolor.slice(0, 2), 16);
    var g = parseInt(hexcolor.slice(2, 2), 16);
    var b = parseInt(hexcolor.slice(4, 2), 16);

    // 计算 YIQ 亮度
    var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;

    // 根据亮度返回黑色或白色
    return (yiq >= 128) ? '#000000' : '#ffffff';
}

// 根据颜色值生成对应按钮的 hover 颜色
export function getHoverColor(hex: string) {
    const percent: number = 0.2;
    // 确保传入的是一个六位的 HEX 颜色
    if (hex.length !== 7 || hex[0] !== '#') {
        throw new Error('传入的颜色值不是一个有效的 HEX 颜色值');
    }

    // 将 HEX 颜色转换为 RGB
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    // 计算调整亮度后的颜色值
    const getLighterComponent = (component: number) => {
        const lighter = Math.floor(component + (255 - component) * percent);
        return lighter > 255 ? 255 : lighter;
    };

    // 调整每个颜色分量
    const rLighter = getLighterComponent(r);
    const gLighter = getLighterComponent(g);
    const bLighter = getLighterComponent(b);

    // 将调整后的 RGB 值转换回 HEX
    const toHex = (c: number) => c.toString(16).padStart(2, '0');
    const hoverHex = `#${toHex(rLighter)}${toHex(gLighter)}${toHex(bLighter)}`;

    return hoverHex;
}

