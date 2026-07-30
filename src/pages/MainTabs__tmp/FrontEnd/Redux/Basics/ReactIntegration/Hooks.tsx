import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
