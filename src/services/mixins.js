import moment from 'moment'

export const DateMixin = {
    
    filters: {
        formatDate(str, outputFormat = 'YYYY-MM-DD HH:mm:ss'){
            return moment(str).format(outputFormat)
        },

        diffForHUmans(str) {
            return moment(str).from(moment())
        }
    }
}