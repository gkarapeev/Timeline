export const worldToScreen = (x, y, offset_X, offset_Y, zoomFactor) => {
    let screenX = (x - offset_X) * zoomFactor;
    let screenY = (y - offset_Y) * zoomFactor;
    return [screenX, screenY]
}

export const screenToWorld = (x, y, offset_X, offset_Y, zoomFactor) => {
    let worldX = (x / zoomFactor) + offset_X;
    let worldY = (y / zoomFactor) + offset_Y;
    return [worldX, worldY]
}
