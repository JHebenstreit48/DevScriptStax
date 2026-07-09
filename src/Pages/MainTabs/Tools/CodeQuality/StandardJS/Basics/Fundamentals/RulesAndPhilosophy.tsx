import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const RulesAndPhilosophy = () => {
  const markdownFilePath = 'Tools/CodeQuality/StandardJS/Basics/Fundamentals/RulesAndPhilosophy';

  return (
    <>
      <PageLayout>
        <PageTitle title="Rules & Philosophy" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RulesAndPhilosophy;
