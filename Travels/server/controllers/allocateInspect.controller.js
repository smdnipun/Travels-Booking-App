import inspectorAllocationService from '../services/inspector.service.js'

export const InspectorApi = () => {
  const createAllocateInspector = async (req, res, next) => {
    try {
      const savedLink = await inspectorAllocationService.allocateInspector(
        req.body
      )
      res.status(200).json(savedLink)
    } catch (err) {
      next(err)
    }
  }

  const getByInspectorId = async (req, res, next) => {
    // let myquery = { Inspector_id: Object(req.params.Inspector_id) }
    // AllocateInspectorSchema.find(myquery, function (err, result) {
    //   if (err) throw err
    //   res.json(result)
    // })
    try {
      const allocateInspector =
        await inspectorAllocationService.getInspectorById(
          req.params.Inspector_id
        )
      res.status(200).json(allocateInspector)
    } catch {
      next(err)
    }
  }

  return {
    create: createAllocateInspector,
    get: getByInspectorId,
  }
}
