import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Hooks = () => {
  const markdownFilePath = 'FrontEnd/Redux/Basics/ReactIntegration/Hooks';

  return (
    <>
      <PageLayout>
        <PageTitle title="Hooks (useSelector/useDispatch)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Hooks;
