import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
