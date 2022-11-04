import allocateInspectorModel from '../models/allocateInspector.model.js'

class InspectorAllocation {
  async allocateInspector(data) {
    const obj = allocateInspectorModel(data)
    const allocation = await obj.save()
    if (!allocation) return null
    const json = allocation.toJSON()
    return json
  }
  async getInspectorById(id) {
    let myquery = { Inspector_id: Object(id) }
    const result = await allocateInspectorModel.find(myquery)
    if (!result) return null
    const json = result.map((r) => r.toJSON())
    return json
  }
}

const inspectorAllocationService = new InspectorAllocation()
export default inspectorAllocationService
