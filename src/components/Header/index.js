import style from './index.module.less'
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    return () => <header className={style.header}>{props.title}</header>
  }
}
