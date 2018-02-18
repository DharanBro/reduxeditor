/**
 * Mocking client-server processing
 */
import _chartdata from './chartdata.json'

const TIMEOUT = 500

export default {
    getChartData: (cb, id, timeout) => setTimeout(() => cb(_chartdata[id]), timeout || TIMEOUT)
}
