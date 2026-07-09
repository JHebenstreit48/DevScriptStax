import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const VariantsAndState = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Advanced/Composition/VariantsAndState';

  return (
    <>
      <PageLayout>
        <PageTitle title="Variants & State" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default VariantsAndState;
