enum SourceType {
	texture = 'texture',
	cubeTexture = 'cubeTexture',
	gltfModel = 'gltfModel',
}

interface Source {
	name?: string
	type?: 'texture' | 'cubeTexture' | 'gltfModel' | string
	path?: string | string[]
}

const sources = [
	{
		name: 'environmentMapTexture',
		// type: SourceType.cubeTexture,
		type: 'cubeTexture',
		path: [
			'textures/environmentMap/px.jpg',
			'textures/environmentMap/nx.jpg',
			'textures/environmentMap/py.jpg',
			'textures/environmentMap/ny.jpg',
			'textures/environmentMap/pz.jpg',
			'textures/environmentMap/nz.jpg',
		],
	},
	{
		name: 'grassColorTexture',
		// type: SourceType.texture,
		type: 'texture',
		path: 'textures/dirt/color.jpg',
	},
	{
		name: 'grassNormalTexture',
		// type: SourceType.texture,
		type: 'texture',
		path: 'textures/dirt/normal.jpg',
	},
	{
		name: 'foxModel',
		// type: SourceType.gltfModel,
		type: 'gltfModel',
		path: 'models/Fox/glTF/Fox.gltf',
	},
]

export { SourceType, Source, sources }
