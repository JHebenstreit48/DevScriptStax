import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CompositionAndAsProp = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Basics/CorePatterns/CompositionAndAsProp';

  return (
    <>
      <PageLayout>
        <PageTitle title="Composition & asProp" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CompositionAndAsProp;
