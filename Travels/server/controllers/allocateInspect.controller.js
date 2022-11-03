import AllocateInspectorSchema from '../models/allocateInspector.model.js'

export const InspectorApi = () => {
  const createAllocateInspector = async (req, res, next) => {
    const newLink = new AllocateInspectorSchema(req.body)

    try {
      const savedLink = await newLink.save()
      res.status(200).json(savedLink)
    } catch (err) {
      next(err)
    }
  }

  const getByInspectorId = async (req, res, next) => {
    let myquery = { Inspector_id: Object(req.params.Inspector_id) }
    AllocateInspectorSchema.find(myquery, function (err, result) {
      if (err) throw err
      res.json(result)
    })
  }

  return {
    create: createAllocateInspector,
    get: getByInspectorId
  }
}

